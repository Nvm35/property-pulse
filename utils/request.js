const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchPeroperties() {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.properties;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchPeroperty(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.properties;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export { fetchPeroperties, fetchPeroperty }