"use client";
import { fetchPeroperty } from "@/utils/request";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PropertyPage = () => {
  const { id } = useParams();
  const { property, setProperty } = useState(null);
  const { isLoading, setIsLoading } = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const property = await fetchPeroperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  return <div>PropertyPage</div>;
};

export default PropertyPage;
