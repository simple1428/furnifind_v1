import { WarningAlert } from "@/Components/Index";

export function handleImage(files, { data, setData }) {
    const maxAllowedImages = 5;
    const totalImages =
        data.images.length + files.length + data.imagesParsed.length;

    if (totalImages <= maxAllowedImages) {
        const images = [...data.images, ...files];
        setData("images", images);
    } else {
        WarningAlert("You can only enter a maximum of 5 images", "center");
    }
}

export function handleRemoveImages(id, { data, setData }) {
    const updatedImages = data.images.filter((image, i) => i !== id);
    setData("images", updatedImages);
}

export function handleRemoveImagesOld(id, { data, setData }) {
    const updatedImages = data.imagesParsed.filter((image, i) => i !== id);
    setData("imagesParsed", updatedImages);
}

export function trashImage(files, { data, setData }) {
    const trashImages = [...data.trashImages, files];
    setData("trashImages", trashImages);
}
