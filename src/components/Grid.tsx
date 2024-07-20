export const GridOverlay = () => {
  const gridSize = 100;
  const gridDivisions = 100;

  return <gridHelper args={[gridSize, gridDivisions]} position={[0, 0, 0]} />;
};
