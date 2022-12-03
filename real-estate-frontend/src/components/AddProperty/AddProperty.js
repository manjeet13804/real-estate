import { useState } from "react"
import BasicInfo from "./BasicInfo"
import GenralInfo from "./Genralnfo"
import LocationInfo from "./LocationInfo"
import PropertyDetails from "./PropertyDetails"
const AddProperty = () => {
    const [formData, setFormData] = useState({
        propertyType:"",
        negotiable:"",
        price: '',
        ownership:"",
        propertyAge:"",
        propertyApproved:"",
        propertyDescription: "",
        bankLoan:"",
        length: '',
        breath: '',
        totalArea: '',
        areaUnit:"",
        noOfBHK:"",
        noOfFloor:"",
        attached:"",
        western:"",
        furnished:"",
        carParking:"",
        lift:"",
        electricity: "",
        facing:"",
        name:"",
        mobile: '',
        postedBy:"",
        saleType:"",
        featuredPackage:"",
        ppdPackage:"",
        email: "",
        city:"",
        area: "",
        pincode:"",
        address: "",
        landmark: "",
        latitude: "",
        longitude: ""
    })
const [isTogle,setIsTogle]=useState({
    BasicInfo:true,
    propertyDetails:false,
    GenralInfo:false,
    LocationInfo:false
})
    return <>
    {isTogle.BasicInfo && <BasicInfo formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle}/>}
    {isTogle.propertyDetails && <PropertyDetails formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle}/> }
    {isTogle.GenralInfo && <GenralInfo formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle}/>}
    {isTogle.LocationInfo &&<LocationInfo formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle}/> }
       </>
}
export default AddProperty;