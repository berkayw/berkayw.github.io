// Portfolio item
import { PortfolioItem } from './PortfolioItem.js';

// Model previewer
import { ModelPreviewer } from './ModelPreviewer.js';


let portfolioItems = [];

portfolioItems.push(
    new PortfolioItem(null, 'toei_sonic_head.glb'),
    new PortfolioItem('hybrid', 'paper_airplane.glb'),
);

let promises = [];
portfolioItems.forEach(item => {
    promises.push(item.promise)
});
Promise.all(promises).then(() => {
    new ModelPreviewer(portfolioItems);
});