import CardPage from "../Components/CardPage";
import ContextApi from "../Components/Context/ContextApi";
import Feature from "../Components/FeatureCategaory";
import FeatureProduscts from "../Components/FeatureProduscts";

const Landing = () => {
  return (
    <div>
      <ContextApi>
        <CardPage />
        <Feature />
        <FeatureProduscts
          isdiplay="dispaly"
          nondispaly={false}
          imagedispaly="dispaly"
        />
        <FeatureProduscts
          isdiplay={false}
          nondispaly="dispaly"
          imagedispaly="dispaly"
        />
      </ContextApi>
    </div>
  );
};

export default Landing;
