import { InputError, InputLabel, TextInput } from "@/Components/Index";
import {
    handleImage,
    handleRemoveImages,
    handleRemoveImagesOld,
    trashImage,
} from "../../Function/HandleImage";
import { RiImageAddFill } from "react-icons/ri";

export default function Image({ form }) {
    const { data, errors } = form;
    const asset = window.asset;

    const renderImagePreview = () => {
        return data.images.map((file, index) => (
            <div key={index} className="border w-20 h-20 relative">
                <img
                    className="w-full h-full"
                    src={
                        file
                            ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                />
                <span
                    className="absolute -top-4 -right-0.5 text-red-400 cursor-pointer"
                    onClick={() => handleRemoveImages(index, form)}
                >
                    x
                </span>
            </div>
        ));
    };
    const renderImageOld = () => {
        return data.imagesParsed.map((file, index) => (
            <div key={index} className="border w-20 h-20 relative">
                <img
                    className="w-full h-full"
                    src={`${asset}storage/${file}`}
                    alt=""
                />
                <span
                    className="absolute -top-4 -right-0.5 text-red-400 cursor-pointer"
                    onClick={() => {
                        handleRemoveImagesOld(index, form);
                    }}
                >
                    x
                </span>
            </div>
        ));
    };

    return (
        <div className="flex my-5 items-start gap-x-3">
            <InputLabel className="text-xs w-[15%] text-end">
                <span className="text-red-500">*</span>Foto Produk
            </InputLabel>
            <div className="flex items-center w-[85%] gap-x-3">
                <TextInput
                    accept="image/*"
                    name="images"
                    type="file"
                    required
                    id="images"
                    className="file-input w-full max-w-xs hidden"
                    onChange={(e) => handleImage(e.target.files, form)}
                    multiple
                />
                {data.images.length + data.imagesParsed.length <= 4 && (
                    <label
                        htmlFor="images"
                        className="w-20 border border-dashed h-20 border-gray-400 rounded-sm hover:border-red-600 hover:bg-red-100/50 transisi cursor-pointer flex items-center justify-center flex-col text-red-500 "
                    >
                        <RiImageAddFill className="text-xl" />
                        <span className="text-[8px] text-center">
                            Tambahkan image foto (0/5)
                        </span>
                    </label>
                )}

                {data.imagesParsed.length > 0 && renderImageOld()}
                {data.images.length > 0 && renderImagePreview()}

                <InputError message={errors.images} className="mt-2" />
            </div>
        </div>
    );
}
