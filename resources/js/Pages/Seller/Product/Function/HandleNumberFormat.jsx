export const formatNumber = (number) => {
    if (number < 1000) {
        return number.toString();
    }

    const units = ["", "k", "M", "B", "T"];
    let unitIndex = 0;

    while (number >= 1000 && unitIndex < units.length - 1) {
        number /= 1000;
        unitIndex++;
    }

    return number.toFixed(1) + units[unitIndex];
};

export const findMinMaxHarga = (data) => {
    if (!data || data.length === 0) {
        return { min: 0, max: 0 };
    }

    return data.reduce(
        (acc, item) => {
            if (item.price < acc.min) {
                acc.min = item.price;
            }

            if (item.price > acc.max) {
                acc.max = item.price;
            }

            return acc;
        },
        { min: data[0].price, max: data[0].price }
    );
};
