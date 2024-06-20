import { PeopleModel } from "@/models/People";

export const POST = async (req: any) => {
  try {
    const { id, data } = await req.json();
    const {
      name,
      gender,
      email,
      age,
      dob,
      phone,
      street,
      city,
      state,
      country,
      postcode,
    } = data;

    const people = await PeopleModel.findOne({ _id: id });
    if (people) {
      people.name = name;
      people.gender = gender;
      people.email = email;
      people.age = age;
      people.dob = dob;
      people.phone = phone;
      people.street = street;
      people.city = city;
      people.state = state;
      people.country = country;
      people.postcode = postcode;
      await people.save();
    }
    return Response.json({ success: true, data: people });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, data: null });
  }
};
