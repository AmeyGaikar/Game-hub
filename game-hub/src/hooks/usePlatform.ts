import usePlatforms from "./usePlatforms";



const usePlatform = (selectedPlatformId?: number) => {
  const { data, error } = usePlatforms();

  const platform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  return {platform};
};

export default usePlatform;
