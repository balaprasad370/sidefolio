import React from "react";
import { Heading } from "./Heading";
import StackIcon from "tech-stack-icons";


const techStackIcons = [
  "java",         // ✅ Java
  "nodejs",       // ✅ Node.js
  "react",      // ✅ React
  "nextjs",       // ✅ Next.js
  "mysql",        // ✅ MySQL
  "redis",        // ✅ Redis
  "typescript",   // ✅ TypeScript
  "docker",       // ✅ Docker
  "aws",          // ✅ AWS
  "spring",       // ✅ Spring Boot
  "android",      // ✅ Android
  "graphql",      // ✅ GraphQL
];

export const TechStack = () => {
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap gap-4">
        {techStackIcons.map((name) => (
          <div key={name} style={{ width: 40, height: 40 }}>
            <StackIcon key={name} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
};
