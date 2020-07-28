import ImageView from './ImageBlock/View'
import ImageEdit from './ImageBlock/Edit'

const applyConfig = (config) => {
  return {
    ...config,
    blocks : {
      ...config.blocks,
      blocksConfig: {
        ...config.blocks.blocksConfig,
        image: {
          ...config.blocks.blocksConfig.image,
          view: ImageView,
          edit: ImageEdit
        }
      }
    }
  };
};

export default applyConfig;
