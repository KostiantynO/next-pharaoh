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
- Broswer:

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
