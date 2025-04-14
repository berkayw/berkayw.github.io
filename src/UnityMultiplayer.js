// Portfolio item
import { PortfolioItem } from './PortfolioItem.js';

// Model previewer
import { ModelPreviewer } from './ModelPreviewer.js';


let portfolioItems = [];

portfolioItems.push(
    new PortfolioItem(null, 'atom.glb'),
    new PortfolioItem('crystalWars', 'crystal_container.glb'),
);

let promises = [];
portfolioItems.forEach(item => {
    promises.push(item.promise)
});
Promise.all(promises).then(() => {
    new ModelPreviewer(portfolioItems);
});