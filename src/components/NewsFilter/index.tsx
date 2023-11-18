import { Formik, Form } from "formik";
import FormItem from "./components/FormItem";
import SelectFormItem from "./components/SelectFormItem";
import { FilterFormValues } from "src/utils/types";
import { dataSources, newsAPICategories } from "src/utils/constants";

interface Props {
  handleSubmit: (values: FilterFormValues) => void;
}

const NewsFilter = ({ handleSubmit }: Props) => {
  const initialValues: FilterFormValues = {
    keywords: "",
    date: "",
    category: "",
    source: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <Form className="bg-violet-800 p-2 my-2 rounded-md">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
          <FormItem
            name="keywords"
            label="Keywords"
            placeholder="Enter keywords"
          />
          <FormItem
            name="date"
            label="Date"
            placeholder="Select Date"
            type="date"
          />

          <SelectFormItem
            name="category"
            label="Category"
            placeholder="Select Category"
            options={newsAPICategories}
          />

          <SelectFormItem
            name="source"
            label="Source"
            placeholder="Select Source"
            options={dataSources}
          />
        </div>
        <div className="flex md:justify-end">
          <button
            className="p-2 bg-amber-400 hover:bg-amber-200 active:scale-95 transition-[100ms] text-black font-bold rounded-md w-full md:w-[244px]"
            type="submit"
          >
            Filter
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default NewsFilter;
