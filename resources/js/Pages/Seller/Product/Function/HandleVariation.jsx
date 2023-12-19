// menambahkan sub variasi baru

export function addToVariation(items, { data, setData }) {
    const { index, ket, value } = items;
    if (data.variation.length > 0) {
        if (ket == "price") {
            const newVariation = [...data.variation];
            newVariation[index] = { ...newVariation[index], price: value };
            setData("variation", newVariation);
        } else if (ket == "image") {
            const newVariation = [...data.variation];
            newVariation[index] = { ...newVariation[index], image: value };
            setData("variation", newVariation);
        } else if (ket == "stock") {
            const newVariation = [...data.variation];
            newVariation[index] = { ...newVariation[index], stock: value };
            setData("variation", newVariation);
        }
    }
}
export function addToVariationOld(items, { data, setData }) {
    const { index, ket, value } = items;
    if (data.variation_old.length > 0) {
        if (ket == "price") {
            const newVariation = [...data.variation];
            newVariation[index] = { ...newVariation[index], price: value };
            setData("variation_old", newVariation);
        } else if (ket == "stock") {
            const newVariation = [...data.variation];
            newVariation[index] = { ...newVariation[index], stock: value };
            setData("variation_old", newVariation);
        }
    }
}

// tambah variasi baru
export function confirmVariation({ data, setData }, name, setName) {
    const a = {
        name: name,
    };
    const variant = [...data.variation, a];
    setData("variation", variant);
    setName("");
}

// menghapus variasi
export function removeVariant(i, { data, setData }) {
    const variant = data.variation.filter((item, index) => index !== i);
    setData("variation", variant);
}
