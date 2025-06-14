"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className="relative flex justify-center items-center"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="700"
          width="700"
          className="rounded-2xl object-contain shadow-2xl"
          priority
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-white to-transparent h-40 w-full" />
      </motion.div>
      <div className="flex flex-row justify-center gap-4 my-12 flex-wrap">
        {product.images && product.images.length > 0 && product.images.map((image, idx) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
            className={`relative rounded-xl overflow-hidden transition-all duration-200 ${
              activeImage === image ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={image}
              alt="product thumbnail"
              height="1000"
              width="1000"
              className="h-16 w-20 md:h-44 md:w-64 object-cover object-center hover:opacity-80 transition-opacity"
            />
          </motion.button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Heading className="text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {product.title}
          </Heading>
        </motion.div>
        <div className="flex flex-wrap gap-2 justify-center">
          {product.stack && product.stack.length > 0 && product.stack.map((stack: string) => (
            <span
              key={stack}
              className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-200 shadow-sm hover:shadow"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Paragraph className="text-lg text-center max-w-3xl mx-auto text-gray-600">
          {product.description}
        </Paragraph>
      </div>
      <div className="prose prose-lg max-w-4xl mx-auto mt-16 text-gray-700">
        {product?.content}
      </div>

      {product.href !== "#" && (
        <div className="flex justify-center mt-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-full hover:from-gray-800 hover:to-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Live Preview
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="M13 18l6-6" />
              <path d="M13 6l6 6" />
            </svg>
          </motion.a>
        </div>
      )}
    </div>
  );
};
