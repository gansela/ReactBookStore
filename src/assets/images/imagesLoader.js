function importAll(r) {
    return r.keys().map(r);
}

export const covers = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));