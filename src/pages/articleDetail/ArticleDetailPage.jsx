import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
const breadCrumbsData = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Article title", link: "/blog/1" },
  ];
  
  const postsData = [
    {
      _id: "1",
      image: images.Post1Image,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
    {
      _id: "2",
      image: images.Post1Image,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
    {
      _id: "3",
      image: images.Post1Image,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
    {
      _id: "4",
      image: images.Post1Image,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
  ];
  
  const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education",
  ];
  