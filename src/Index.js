// Video item
import { VideoItem } from '../src/VideoItem.js';

// Video selector
import { VideoSelector } from '../src/VideoSelector.js';

// Videos
let videoItems = [];
videoItems.push(
    new VideoItem('underworld', 'underworldVid'),
    new VideoItem('fpsMov', 'fpsMovVid'),
    new VideoItem('hybrid', 'hybridVid'),
    new VideoItem('blueBoy', 'blueBoyVid'),
    new VideoItem('shadowOfSea', 'shadowOfSeaVid'),
    new VideoItem('crystalWars', 'crystalWarsVid'),

    
    

);

new VideoSelector(videoItems);