import { fadeIn, fadeOut, delay } from "./effects";

export const infiniteScroll = ({ callback, loading, bottom = 1 }) => {
    let hasMore = true;

    if (typeof loading === 'string') {
        loading = document.querySelector(loading);
    }

    const showLoading = () => {
        fadeIn(loading, 500);
    }

    const hideLoading = () => {
        fadeOut(loading, 500);
    }

    const loadMoreContent = () => {
        showLoading();
        delay(500).then(() => {
            callback().then(response => {
                hasMore = response
            });
            hideLoading();
        })
    }

    const isInTheEnd = () => {
        return window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight - Math.abs(bottom);
    }

    const checkScroll = () => {
        if (!hasMore) {
            return removeEventListener('scroll', checkScroll);
        }
        if (isInTheEnd()) {
            return loadMoreContent();
        }
    }

    const reset = () => {
        hasMore = true;
    }

    const stop = () => {
        hasMore = false;
    }

    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);

    return { isInTheEnd, loadMoreContent, showLoading, hideLoading, reset, stop };
}