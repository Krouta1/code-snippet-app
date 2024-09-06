import React from "react";

const CTA = () => {
  return (
    <div className="mx-16 mt-[120px] flex flex-col items-center gap-6">
      <h2 className="text-center text-2xl font-bold">
        Organize Your Code{" "}
        <span className="decoration-primary underline decoration-dashed underline-offset-2">
          Snippets
        </span>
      </h2>
      <p className="w-[450px] text-center text-sm text-slate-500 max-sm:w-full">
        Code Snippet is a library of code snippets, tutorials, and articles for
        developers. Snippets are categorized and can be integrated into your
        codebase easily.
      </p>
      <button
        type="button"
        className="bg-primary block cursor-pointer rounded-md px-9 py-3 text-sm font-medium text-white transition-colors focus:outline-none"
      >
        {`Let's Get Started`}
      </button>
    </div>
  );
};

export default CTA;
