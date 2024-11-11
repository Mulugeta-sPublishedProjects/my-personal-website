/* eslint-disable unicorn/prevent-abbreviations */
"use client";

import { useState } from "react";
import EventList from "../components/git-info/events";
import FollowerList from "../components/git-info/follower";
import FollowingList from "../components/git-info/following";
import GitHubProfile from "../components/git-info/git-status";
import ReceivedEventList from "../components/git-info/received-list";
import RepoList from "../components/git-info/repo-list";
import StarredList from "../components/git-info/stared-list";
import SubscriptionList from "../components/git-info/subscription-list";

type ComponentOptions =
  | "GitHubProfile"
  | "RepoList"
  | "EventList"
  | "ReceivedEventList"
  | "FollowerList"
  | "FollowingList"
  | "StarredList"
  | "SubscriptionList";

const Page = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentOptions>("GitHubProfile");

  const componentOptions = [
    { label: "GitHub Profile", value: "GitHubProfile" },
    { label: "Repository List", value: "RepoList" },
    { label: "Event List", value: "EventList" },
    { label: "Received Event List", value: "ReceivedEventList" },
    { label: "Follower List", value: "FollowerList" },
    { label: "Following List", value: "FollowingList" },
    { label: "Starred Repos", value: "StarredList" },
    { label: "Subscription List", value: "SubscriptionList" },
  ];

  const componentMap: Record<ComponentOptions, JSX.Element> = {
    GitHubProfile: <GitHubProfile />,
    RepoList: <RepoList />,
    EventList: <EventList />,
    ReceivedEventList: <ReceivedEventList />,
    FollowerList: <FollowerList />,
    FollowingList: <FollowingList />,
    StarredList: <StarredList />,
    SubscriptionList: <SubscriptionList />,
  };

  const renderSelectedComponent = () =>
    componentMap[selectedComponent] || undefined;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(e.target.value as ComponentOptions);
  };

  return (
    <div className="container mx-auto p-8 to-pink-500 text-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary-400">
        GitHub Dashboard
      </h1>

      <div className="flex justify-center mb-8">
        <select
          id="componentSelect"
          className="w-1/2 p-3 bg-white text-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          value={selectedComponent}
          onChange={handleSelectChange}
        >
          {componentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default Page;
