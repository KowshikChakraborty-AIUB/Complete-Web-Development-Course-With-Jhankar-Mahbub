import { useForm } from "react-hook-form";
import SectionTitle from "../../components/Section Title/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to image bb and then get the image url.
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type':'multipart/form-data',
            }
        });
        console.log(res.data);
    }

    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={"what's new?"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name", {required: true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={"default"} className="select select-bordered w-full" {...register("category", {required: true})}>
                                <option disabled value={"default"}>Select a category first</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", {required: true})} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Description</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Description"></textarea>
                    </div>
                    <div className="form-control my-6">
                        <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Add Item <FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;