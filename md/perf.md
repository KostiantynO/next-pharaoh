# `Performance`

## `Priorities`

1. Fewer draw calls
2. Fewer materials
3. Fewer state changes
4. Stable memory
5. Readable code (not best, not fast, but HUMANE, readable BY ME, after one year :D)
6. ONLY THEN, micro-optimizations

---

## `Strategy`

- [ ] Hover labels → one text, move it
- [ ] instanceId → index → coordinates
  - `InstancedMesh` 'map'-tiles highlight on hover, when building type is selected to be
    placed on the map.
  - And highlight should be the size of the building (width x length), starting from the
    pointer, and moving south and east.
- [ ] Temp Object3D → matrix factory
- [ ] .clone() → correctness, not waste
- [ ] useMemo → perfect here
- [ ] useRef → only for mutable runtime data
- [ ] all static buildings into one BufferGeometry
  - minimize `<mesh` calls app wide.
- [ ] use LOD for far-away stuff
- [ ] And batch updates in useFrame

- Inside useFrame or useEffect, you update matrices:

  ```tsx
  // import {instancedMesh} from 'rf3 or drei'
  import { shaderMaterial } from '@react-three/drei'

  const BuildingMaterial = shaderMaterial(
    { time: 0 },
    // vertex shader
    `
    uniform float time;
    void main() {
      vec3 p = position;
      p.y += sin(time + position.x) * 0.1;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
    `,
    // fragment shader
    `
    void main() {
      gl_FragColor = vec4(1.0);
    }
    `
  )

  const A = () => {
    const v = useMemo(() => new Vector3(), [])

    useFrame((_, delta) => {
      tempMatrix.compose(position, rotation, scale)
      ref.current.setMatrixAt(i, tempMatrix);
      ref.current.time += delta
    })

    return (
      <>
        <instancedMesh args={[geometry, material, count]} ref={ref}>
        <buildingMaterial ref={ref} />
      </>
    )
  };
  ```

- [ ] Instanced houses
- [ ] Instanced trees
- [ ] GPU-based idle animations (wind, heat shimmer)
- 1️⃣ Is this repeated many times?
- - InstancedMesh
- 2️⃣ Is this animated every frame?
  - Shader uniform
- 3️⃣ Is this allocating objects in useFrame?
  - Memoize or remove
- 4️⃣ Does this need per-object uniqueness?
  - Attribute, not JS loop

GPU: House meshes, idle sway, wind, sun shimmer

CPU: Building placement, logic, economy, pathfinding

---

### `Logistics`

- GPU
  - [ ] renderer.info.render.calls (if bigger than 100, >200-300 = batching fails)
  - [ ] renderer.info.render.triangles
  - [ ] renderer.info.programs.length
- React
  - [ ] React DevTools → Profiler
  - [ ] <Stats /> (feel + spikes)
- CPU
  - Chrome: Performance → Memory → Allocation
  - performance.mark("start")
  - // run workload
  - performance.mark("end")
  - performance.measure("test", "start", "end")
  - performance.getEntriesByName("test")[0].duration
- Broswer

  - wrap code in performance.measure().
  - Use Lighthouse audits.
  - console.log(`${performance.memory.usedJSHeapSize / 1024 / 1024} MB`); Run before/after
    optimizations.
  - Track:
    - number of objects
    - GC pause time
    - allocation rate

- Node:
  - process.memoryUsage().heapUsed;
  - --inspect --trace-gc

FPS drops {

- calls go up → GPU bound
- calls flat → CPU/GC bound

}
