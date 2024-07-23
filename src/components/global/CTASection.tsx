import React from "react";

type CTASectionProps = {};

const CTASection = (props: CTASectionProps) => {
  return (
    <section className="mx-16 mt-[120px] flex flex-col items-center gap-6">
      <h2 className="text-center text-2xl font-bold">
        Organize Your Code Snippets{" "}
        <span className="text-primary">Efficiently!</span>
      </h2>
      <p className="w-[450px] text-center text-sm text-slate-500 max-sm:w-full">
        With our advanced tagging and search features, you can quickly find the
        snippet you need, right when you need it. Spend less time searching for
        code and more time writing it.
      </p>
      <button
        className="block rounded-md border border-primary px-9 py-3 text-sm font-medium text-slate-900 transition focus:outline-none"
        type="button"
      >
        {`Let's Get Started`}
      </button>
    </section>
  );
};

export default CTASection;
