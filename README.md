```bash
pnpm dev
pnpm add -D prettier prettier-plugin-tailwindcss
pnpm add @react-three/fiber @react-three/drei zustand
pnpm add -D @tailwindcss/container-queries
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/eslint
                         # 398 MB (417,939,108 bytes)
pnpm add three           # 398 MB (417,939,174 bytes)
pnpm add -D @types/three # 402 MB (421,849,020 bytes)

```

- Game Design:

  - `What kind of game mechanics are you planning for PharaOwO?`

    `Answer`: I want to make it similar to original Pharaoh, but on web. Because it is
    simple game by its nature. The are no fancy 3D stuff. It is mostly static buildings,
    roads, grass, trees. But some parts are dynamic - like mobile military units, roaming
    wild animals, birds, crocs, hippos, emigrants and immigrants, citizens. The setting
    takes place in early Egypt, where you build Pyramids and you help PharaOwO to build a
    great country with beautiful and rich cities by governing each city development in its
    own mission (scenario/map).

  - Is it primarily about building, resource management, exploration, or something else?

    `Answer`: The world is quite limited isometric map, on which you can place huts for
    citizens to immigrate to your city by Kingdom Road. Then you build well, architect
    post, and apothecary, so citizens will have basic needs covered. Then you start
    providing your people with food (hunting lodge/farm/fishing) and water (water
    carrier). After you make some temples to 5 egyptian Gods to provide access to religion
    for every people, so Gods will be pleased and bless you with tangible boons. Then you
    start trade with some nearby cities, import what you do not have and export excessive
    raw materials or processed goods for higher profits, by water (trading docs) and by
    land (caravans). Then you prepare some small military for home defense, they can move
    on the map in formation to any point freely by your order, to kill enemies by bow and
    spear. So it is definitely about building, employment, resources management (debens
    and other valuable resources), small defensive gameplay with walls, gates and towers
    with archers and spear throwers on them. But the main focus is building a city and
    maintaining a stable stream of goods and supplies for its development and citizen
    needs.

- Scene and Environment:

  - How are you planning to structure your game world?

    `Answer`: What do you mean by structure of game world? I think it will be a campaign
    over several missions, each covering a different city in different part of Egypt
    (water and grass, or mines in rocks with golds/diamonds/steel). Game world is
    experienced by a player in two modes: first is real time city builder management
    simulator, second is 'world view' map of Egypt, on which player can see his town, and
    nearby cities for trade, where he may click on city to open a trade route to it (by
    land through routes of many oasis or by Nile waters).

  - Are you thinking of a static environment or one that dynamically changes over time?

    `Answer`: I want it to be a combination of static and dynamic, all as in real life.
    Buildings are static. People, warriors and wild life are moving. Trade girls move from
    market to houses to sell/deliver their goods to inhabitants. Workers move big slabs of
    limestone to pyramids. Nile river is expanding and shrinking during the game many
    times at inundation periods, so the banks of the river became fertile with minerals to
    grow crops twice a year. Player can place a buildings and remove them. So it is
    totally dynamic environment, although usually player is only placing buildings and
    they sit there for very long, until the end of the game :D But people constantly
    moving throughout the city, although usually in circles (travel path of a current
    citizen by roads may randomly change to turn left or right when this citizen
    encounters a crossroad sign on the road).

    - Edit: 2026-01-18 05:09

      Fixed timestep is a MUST:

      - Simulation runs in fixed delta
      - Rendering interpolates if needed
      - Never simulate with variable delta

      Rules:

      - Events are queued, never processed immediately
      - Events emitted in tick N are processed `after` all systems for tick N
      - No event is allowed to mutate the world mid-system

- Assets and Models:

  - Have you prepared or chosen any 3D models or assets for your game, or are you planning
    to create them from scratch?

    `Answer`: No. I totally do not want to create any 3D models for anything :D It will
    take forever for me alone :) So I want to build it. And to build it quickly. I want
    plain isometry 2D, or 2.5D as you can call it. View from above and you see from 2 to 3
    sides of the building at once (you may see top, left, and front, OR you may see top,
    back, right, etc. , but you cannot see bottom of it). I also do not have any models on
    me. And I do not know how to create them. I think I will be good by having 2D
    textures, and will render then in correct angle to the camera, so it will cool! I do
    not know how I will find them, or generate them. Maybe I will use some
    creative-commons and free pictures for textures.

    - Edit: 2026-01-17 23:17, I want to make 3D objects imitation, with 6 sides static
      images. Covering 360° view of the building.

      I don't want full 3D specifically. I want simple, abstract, pretty, light, `sexy`
      graphics. Same as in `Magic survival` android game, but a little more details for
      buildings and villagers, same as original Pharaoh :D Not heavy full 3D models.

      [ ] Very rare, occasional moon walk :D (initially, just glitch).

      [ ] After all optimizations are done. I will make an actual leg slide sprite :D Like,
      if vill was on map for 5 minutes, then randomly, 1 in an 100 seconds, they will moonwalk,
      for say 5 secs... :D Only some vills can learn this skill. Which brings me an idea :D

      [ ] add rpg elements - vills learning skills :D By earning xp???

      [ ] Do in-game vills also die? As an offset for `perfectly balanced` skill-advantage?
      :] In original Pharaoh, vills also died, but you can see this only in demographics bar
      chart page

- Interaction and Controls:

  - How do you envision player interaction with the game world?

  `Answer`: I think it will be mouse and keyboard.

  - Are there specific controls or interactions you want to implement?

  `Answer`: You press a button to quickly select building type. Then you hover your mouse
  on the place where you want to build it. You click `LMB`(left mouse button) and building
  will be build there after some short time. So this is mainly a desktop game. But it will
  be possible to play it on tablet I think too.

- UI and State Management:

  - How are you planning to handle game state and UI elements?

    `Answer`: For 'global' app state I will be using `zustand`, but since it is Next.js 14
    also, app will be initially server rendered and then hydrated on the client, so it
    will take over the canvas stuff and 'use client' components. For local state it is
    possible to use `useState` and `useRef` hooks, but I didn't need them for now. I only
    have state in my 'local per request' zustand store, which created for each new request
    to the server, no global zustand store, but all app can access hydrated zustand store
    on the client.

    - Edit: 2026-01-17 01:42 23:17

      We need to update our mental model for state handling:
      [r3f lerp + useFrame](https://r3f.docs.pmnd.rs/advanced/pitfalls#%E2%9C%85-use-lerp-+-useframe)

    ```tsx
    const ref = useRef(null);
    useFrame(() => (ref.current.position.x = api.getState().x));
    return <mesh ref={ref} />;
    ```

    - [Edit: 2026-01-18 04:17](/md/ai-convo.md)

  - Are there complex UI components or interactions you need to integrate?

    `Answer`: YES! CANVAS! IT IS THE MOST COMPLEX UI component you can imagine :) And
    player interactions with it are crucial for the game! Player should be able to click
    on sidebar (virtual inside canvas, or real inside html) and select a building type he
    wants to build, then player hovers over then canvas and clicks `LMB` to place a
    building at cursor position inside canvas. I do not know how will it be best, to make
    buttons and menus with React or all app inside one CANVAS element? Before asking your
    help, I already tried to made a UI in react, but without canvas. It went pretty well!
    It was like shell over the canvas, TopNavBar with dropdown menus, and Sidebar (left or
    right by choice), where you can select a type of building to building on the map. But
    I didn't get a chance to draw anything on canvas, nor did I integrated anything from
    `UI -> click -> draw on canvas` related. I want to make this SO MUCH! So, I want to
    integrate a `LMB` click with canvas to draw buildings modes inside canvas under a
    cursor and apply different textures to those models, depending on active selected
    button (type of building to build).

- Multiplayer Considerations:

  - You mentioned it's single-player only, but are there any features or considerations
    from multiplayer games that might influence your design or development?

    `Answer`: Currently I need to focus on delivering somethings tangible, at least for
    myself. If I can play this game alone, it is OK for the starters. It is good to design
    my game in such a way, so it can be easily extended into playing by two people. But I
    explicitly do not want to implement any code related to multiplayer. I just want to
    finish single player first. But if I have some hook in my code, which would allow me
    or somebody else to return to this codebase after two years and continue its
    development for multiplayer, it will be good! So, I think it will be a huge mess to
    add multiplayer and a large portion of code would require my attention, time and
    energy. But I have very limited free resources available for this project. I should
    start and finish it to be playable as soon as I can. While I still have a desire for
    this.

- Integration with Next.js:

  - How are you planning to integrate Three.js with Next.js?

    `Answer`: Me? I do not know. I though you would help me with this :D

  - Any specific challenges or requirements you foresee?

    `Answer`: MMM, yes. The challenge here is that I do not know Three.js ecosystem at
    all. So you will be my Guide to this exciting world of 2D, 2.5D and 3D stuff! :D Oh,
    about list of requirements, yes, I have it! Please see it below:

- [`Requirements`](md/reqs.md)

- [`Performance`](/md/perf.md)

  - `Optimizing Performance`: Three.js = instancing, reducing draw calls, and managing
    textures efficiently.
  - `Web Workers and GPU Offloading`: Consider offloading physics calc, AI to Web Workers.
    3js uses WebGL GPU.
  - Three.js = demanding, have you thought about game perf?

    `Answer`: minimize memory, CPU and disk footprint of the game! at 60 fps. I do not
    know how to achieve this :D I would accept any practical solution for it! Maybe use
    Service Workers to offload main thread? Or offload canvas stuff and animations to GPU,
    instead of CPU?

- [`next.js`](/md/next.md)

This a parody hobby personal project in good faith :D

I'm learning how to make a city builder games in web using 3js, rf3, and drei :)

“Temporary placeholder assets used for prototyping. Will be replaced.”
