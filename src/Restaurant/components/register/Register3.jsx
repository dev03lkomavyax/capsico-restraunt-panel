/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { updateMultiplePreview, updatePreview } from '@/utils/updatePreview';
import { useEffect } from 'react';
import { TbCirclePlus } from 'react-icons/tb';
import { PiCameraPlus } from "react-icons/pi";

const Register3 = ({ form }) => {
    const { register, control, watch, setValue, getValues } = form;

    const menuImagesRef = register("menuImages");
    const restaurantRef = register("restaurant");
    const foodImagesRef = register("foodImages");

    const menuImages = watch("menuImages");
    const restaurant = watch("restaurant");
    const foodImages = watch("foodImages");

    useEffect(() => {
        updateMultiplePreview(menuImages, "menuImagesPreview", setValue);
        updateMultiplePreview(restaurant, "restaurantPreview", setValue);
        updateMultiplePreview(foodImages, "foodImagesPreview", setValue);
    }, [form, menuImages, restaurant, foodImages, setValue]);

    return (
        <div>
            <div className='border border-[#C2CDD6] rounded-md px-8 py-6 mt-6'>
                <div className='w-full mt-4'>
                    <div>
                        <h3 className='text-[28px] font-bold text-[#4A5E6D]'>Menu Images</h3>
                        <p className='text-[20px] font-normal text-[#92A5B5]'>Your menu will be displayed directly to customers on Capsico</p>
                    </div>
                    <div className="grid w-full gap-10 pt-10">
                        <div className="w-full relative">
                            <FormField
                                control={control}
                                name="menuImages"
                                render={({ field }) => (
                                    <FormItem className="z-20">
                                        <FormLabel className="cursor-pointer  left-0 w-full h-full top-0">
                                            {/* <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span> */}
                                            {/* {watch("menuImagesPreview") &&
                                                <img className='w-full h-full object-contain' src={watch("menuImagesPreview")} alt="" />
                                            } */}

                                            {!watch("menuImagesPreview") &&
                                                <div className='border-2 border-dashed border-[#C2CDD6] w-full h-72  flex flex-col justify-center items-center rounded-md'>
                                                    <div className='border-2 flex flex-col items-center primary-color border-dashed rounded px-5 py-4'>
                                                        <PiCameraPlus size={45} />
                                                        <p className='font-bold text-center primary-color text-sm mt-2'>Add Photo</p>
                                                    </div>
                                                    <p className='font-normal text-xs mt-2'>or drop files to upload</p>
                                                </div>
                                            }
                                        </FormLabel>
                                        <FormControl className="hidden">
                                            <Input multiple="true" type="file" accept='.png,.jpeg,.jpg' {...menuImagesRef} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {watch("menuImagesPreview") &&
                                <div className='flex flex-wrap h-full gap-4'>
                                    {watch("menuImagesPreview").map((prev, i) => (
                                        <img key={i} className='w-80 h-52' src={prev} alt="" />
                                    ))}
                                </div>}
                        </div>
                    </div>
                </div>

                <div className='w-full mt-4'>
                    <div>
                        <h3 className='text-[28px] font-bold text-[#4A5E6D]'>Restaurant Images</h3>
                        <p className='text-[20px] font-normal text-[#92A5B5]'>Please upload at least one photo of the restaurant’s facade (front view)</p>
                    </div>
                    <div className="grid w-full gap-10 pt-10">
                        <div className="w-full relative">
                            <FormField
                                control={control}
                                name="restaurant"
                                render={({ field }) => (
                                    <FormItem className="z-20">
                                        <FormLabel className="cursor-pointer left-0 w-full h-full top-0">
                                            {/* <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span> */}
                                            {/* {watch("restaurantPreview") &&
                                                <img className='w-full h-full object-contain' src={watch("restaurantPreview")} alt="" />
                                            } */}
                                            {!watch("restaurantPreview") &&
                                                <div className='border-2 border-dashed border-[#C2CDD6] w-full h-72  flex flex-col justify-center items-center rounded-md'>
                                                    <div className='border-2 flex flex-col items-center primary-color border-dashed rounded px-5 py-4'>
                                                        <PiCameraPlus size={45} />
                                                        <p className='font-bold text-center primary-color text-sm mt-2'>Add Photo</p>
                                                    </div>
                                                    <p className='font-normal text-xs mt-2'>or drop files to upload</p>
                                                </div>
                                            }
                                        </FormLabel>
                                        <FormControl className="hidden">
                                            <Input multiple="true" type="file" accept='.png,.jpeg,.jpg' {...restaurantRef} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {watch("restaurantPreview") &&
                                <div className='flex flex-wrap h-full gap-4'>
                                    {watch("restaurantPreview").map((prev, i) => (
                                        <img key={i} className='w-80 h-52' src={prev} alt="" />
                                    ))}
                                </div>}
                        </div>
                    </div>
                </div>

                <div className='w-full mt-4'>
                    <div>
                        <h3 className='text-[28px] font-bold text-[#4A5E6D]'>Food Images</h3>
                        <p className='text-[20px] font-normal text-[#92A5B5]'>Please avoid uploading images of raw ingredients</p>
                    </div>
                    <div className="grid w-full gap-10 pt-10">
                        <div className="w-full relative">
                            <FormField
                                control={control}
                                name="foodImages"
                                render={({ field }) => (
                                    <FormItem className="z-20">
                                        <FormLabel className="cursor-pointer  left-0 w-full h-full top-0">
                                            {/* <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span> */}
                                            {/* {watch("foodImagesPreview") &&
                                                <img className='w-full h-full object-contain' src={watch("foodImagesPreview")} alt="" />
                                            } */}
                                            {!watch("foodImagesPreview") &&
                                                <div className='border-2 border-dashed border-[#C2CDD6] w-full h-72  flex flex-col justify-center items-center rounded-md'>
                                                    <div className='border-2 flex flex-col items-center primary-color border-dashed rounded px-5 py-4'>
                                                        <PiCameraPlus size={45} />
                                                        <p className='font-bold text-center primary-color text-sm mt-2'>Add Photo</p>
                                                    </div>
                                                    <p className='font-normal text-xs mt-2'>or drop files to upload</p>
                                                </div>
                                            }
                                        </FormLabel>
                                        <FormControl className="hidden">
                                            <Input multiple="true" type="file" accept='.png,.jpeg,.jpg' {...foodImagesRef} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {watch("foodImagesPreview") &&
                                <div className='flex flex-wrap h-full gap-4'>
                                    {watch("foodImagesPreview").map((prev, i) => (
                                        <img key={i} className='w-80 h-52' src={prev} alt="" />
                                    ))}
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register3