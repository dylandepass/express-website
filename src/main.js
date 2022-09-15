import App from './App.svelte';

export default function decorate($block) {
    const ratingElement = document.createElement('div');
    new App({
        target: ratingElement
    });
    $block.innerHTML = '';
    $block.appendChild(ratingElement);
}