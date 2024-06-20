import { PeopleModel } from "@/models/People";
import { MongoConnect } from "@/services/dbConnection";

MongoConnect();

export const GET = async (req: any) => {
  try {
    const { searchParams } = new URL(req.url);
    const filter = searchParams.get("filter");
    let peoples;
    if (filter) {
      if (filter === "asc") {
        peoples = await PeopleModel.find({}).sort({ name: 1 });
      }
      if (filter === "dsc") {
        peoples = await PeopleModel.find({}).sort({ name: -1 });
      }
      if (filter === "young") {
        peoples = await PeopleModel.find({}).sort({ age: 1 }).limit(2);
      }
    } else {
      peoples = await PeopleModel.find({});
    }

    return Response.json({ success: true, data: peoples });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, data: null });
  }
};

export const POST = async (req: any) => {
  try {
    const { id } = await req.json();
    const people = await PeopleModel.findOne({ _id: id });
    return Response.json({ success: true, data: people });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, data: null });
  }
};
