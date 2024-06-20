import { PeopleModel } from "@/models/People";

export const POST = async(req:any) => {
  try {
    const { ids } = await req.json();
     const result = await PeopleModel.deleteMany({ _id: { $in: ids } });
    return Response.json({success:true})
  } catch (error) {
    return Response.json({success:false})
  }
}
