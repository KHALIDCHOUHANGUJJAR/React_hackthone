

import FeatureProduscts from "../Components/FeatureProduscts";

const Products = () => {
  return (
    <div>
      <FeatureProduscts isdiplay="dispaly" nondispaly={false} imagedispaly={false} />
      <FeatureProduscts isdiplay={false} nondispaly="dispaly"  />
    </div>
  );
};

export default Products;
