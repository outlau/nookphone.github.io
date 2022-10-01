<script lang="ts">
  import { db } from './firebase/firebase';
  import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    onSnapshot,
    query,
    updateDoc,
          setDoc
  } from 'firebase/firestore';
  import { onMount } from 'svelte';

  interface Milestone {
    miles: number;
    name: string;
    count: number;
    maxCount: number;
    claimed?: boolean;
  }

  interface MilestoneWithId extends Milestone {
    id: string;
  }

  interface Critter {
    name: string;
    found?: boolean;
  }

  interface CritterWithId extends Critter {
    id: string;
  }

  const initialMilestones: Array<Milestone> = [
    {
      miles: 300,
      name: 'Dig up 3 fossils',
      count: 0,
      maxCount: 3,
    },
    {
      miles: 300,
      name: 'Shake a tree',
      count: 0,
      maxCount: 1,
    },
    {
      miles: 400,
      name: 'Shoot down a balloon',
      count: 0,
      maxCount: 1,
    },
    {
      miles: 400,
      name: 'Get a 3 star island',
      count: 0,
      maxCount: 1,
    },
  ];

  const initialCritters: Array<Critter> = [
    {
      name: 'Great Purple Emperor',
    },
    {
      name: 'Pink ladybug',
    },
    {
      name: 'Brown Giant Ant',
    },
    {
      name: 'Orangeriet Skull',
    },
    {
      name: 'Orangeriet Body',
    },
    {
      name: 'Orangeriet Legs',
    },
    {
      name: 'Bee',
    },
  ];

  let milestones: Array<MilestoneWithId> = [];

  const milestonesCollectionName = 'milestones';

  const crittersCollectionName = 'critters';

  let critters: Array<Critter> = [];

  let shrineVal;

  let numberMiles;

  onMount(async () => {
    const milestonesQuery = query(collection(db, milestonesCollectionName));

    const unsubscribeMilestonesQuery = onSnapshot(
      milestonesQuery,
      (querySnapshot) => {
        const tempMilestones = [];
        querySnapshot.forEach((doc) => {
          tempMilestones.push({ ...doc.data(), id: doc.id });
        });
        console.log(tempMilestones);
        milestones = tempMilestones;
      }
    );

    const crittersQuery = query(collection(db, crittersCollectionName));

    const unsubscribeCrittersQuery = onSnapshot(
      crittersQuery,
      (querySnapshot) => {
        const tempCritters = [];
        querySnapshot.forEach((doc) => {
          tempCritters.push({ ...doc.data(), id: doc.id });
        });
        console.log(tempCritters);
        critters = tempCritters;
      }
    );

    // SHIRNE
    const unsub = onSnapshot(doc(db, 'shrine', 'firstshrine'), (doc) => {
      const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
      console.log(source, ' data: ', doc.data());
      shrineVal = doc.data().nearness;
    });

    const unsubMiles = onSnapshot(doc(db, 'miles', 'miles'), (doc) => {
      const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
      console.log(source, ' data: ', doc.data());
      numberMiles = doc.data().value;
    });
  });

  async function reset() {
    // Milestones
    const milestoneQuerySnapshot = await getDocs(
      collection(db, milestonesCollectionName)
    );
    milestoneQuerySnapshot.forEach((document: any) => {
      deleteDoc(doc(db, milestonesCollectionName, document.id));
      console.log(`Deleted ${document.id} => ${document.data()}`);
    });
    await Promise.all(
      initialMilestones.map(async (milestone) => {
        // @ts-ignore
        await addDoc(collection(db, milestonesCollectionName), milestone);
      })
    );

    // Critters
    const crittersQuerySnapshot = await getDocs(
      collection(db, crittersCollectionName)
    );
    crittersQuerySnapshot.forEach((document: any) => {
      deleteDoc(doc(db, crittersCollectionName, document.id));
      console.log(`Deleted ${document.id} => ${document.data()}`);
    });
    await Promise.all(
      initialCritters.map(async (critter) => {
        // @ts-ignore
        await addDoc(collection(db, crittersCollectionName), critter);
      })
    );

    // Miles
    const milesRef = doc(db, 'miles', 'miles');

    // @ts-ignore
    await setDoc(milesRef, {
      value: 0
    });
  }

  async function updateCount(
    milestone: MilestoneWithId,
    additionValue: number
  ) {
    const milestoneRef = doc(db, milestonesCollectionName, milestone.id);

    // @ts-ignore
    await updateDoc(milestoneRef, {
      count: milestone.count + additionValue,
    });
  }

  async function updateShrineNearness(additionValue: number) {
    const shrineRef = doc(db, 'shrine', 'firstshrine');

    // @ts-ignore
    await updateDoc(shrineRef, {
      nearness: shrineVal + additionValue,
    });
  }
  async function setFoundState(e, critter: CritterWithId) {
    console.log(critter);
    const critterRef = doc(db, crittersCollectionName, critter.id);

    // @ts-ignore
    await updateDoc(critterRef, {
      found: e.target.checked,
    });
  }

  let tempNumberMiles = '';

  async function payMiles(){
    const milesRef = doc(db, 'miles', 'miles');

    // @ts-ignore
    await updateDoc(milesRef, {
      value: numberMiles - Number(tempNumberMiles)
    });
  }

</script>

<main>
  <button on:click="{reset}">Reset</button>
  <h1>Miles</h1>

  <h2>{numberMiles} Miles</h2>
  <div class="milestone-container">
    <input bind:value={tempNumberMiles}/>
    <button on:click="{payMiles}">Pay</button>
  </div>
  <h1>Milestones</h1>
  {#each milestones as milestone}
    <div class="milestone-container">
      <h1>{milestone.name}</h1>
      <div>
        <button
          disabled="{milestone.count <= 0}"
          on:click="{() => {
            updateCount(milestone, -1);
          }}">-</button
        >
        {milestone.count}/{milestone.maxCount}
        <button
          disabled="{milestone.count >= milestone.maxCount}"
          on:click="{() => {
            updateCount(milestone, 1);
          }}">+</button
        >
      </div>
    </div>
  {/each}

  <h1>Critters</h1>
  {#each critters as critter}
    <div class="milestone-container">
      <h1>{critter.name}</h1>
      <div>
        <input on:change="{(e) => setFoundState(e, critter)}" type="checkbox" />
        <!--        <button-->
        <!--                disabled="{milestone.count <= 0}"-->
        <!--                on:click="{() => {-->
        <!--            updateFoundState(critter);-->
        <!--          }}">Set has been found</button-->
        <!--        >-->
        <!--        {milestone.count}/{milestone.maxCount}-->
        <!--        <button-->
        <!--                disabled="{milestone.count >= milestone.maxCount}"-->
        <!--                on:click="{() => {-->
        <!--            updateCount(milestone, 1);-->
        <!--          }}">+</button-->
        <!--        >-->
      </div>
    </div>
  {/each}
  <h1>Shrine</h1>
  <div class="milestone-container">
    <h1>Shrine nearness</h1>
    <button
      disabled="{shrineVal <= 0}"
      on:click="{() => {
        updateShrineNearness(-1);
      }}">-</button
    >
    {shrineVal}/2
    <button
      disabled="{shrineVal >= 2}"
      on:click="{() => {
        updateShrineNearness(1);
      }}">+</button
    >
  </div>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    color: #ff3e00;
  }

  h1 {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .milestone-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin: 0 10px;
      padding: 10px 20px;

      &:disabled {
        background-color: #ccc;
      }
    }
  }
</style>
