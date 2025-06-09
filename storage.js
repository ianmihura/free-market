function autosave(that) {
    for (k in that._keys) {
        const key = that._keys[k]
        localStorage.setItem(key, JSON.stringify(that[key]))
    }
}

function export_state() {
    const ex = JSON.stringify(localStorage)
    // TODO export as file
}

function import_state() {
    // TODO import as file
    const data = JSON.parse(/*paste stringified JSON from clipboard*/);
    Object.keys(data).forEach(function (k) {
        localStorage.setItem(k, data[k]);
    });
}
