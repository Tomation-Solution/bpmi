type Prop = {
  label: string;
  istextarea?: boolean;
  register?: any;
  type?: "text" | "file" | "email";
  multiple?: boolean;
  placeholder?: string;
};
const InputWithLabel = ({
  label,
  register,
  istextarea = false,
  type = "text",
  multiple = false,
  placeholder,
}: Prop) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-black"
      >
        {label}
      </label>

      {istextarea ? (
        <textarea
          name=""
          id=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/30 focus:border-primary block w-full p-2.5"
          cols={30}
          rows={10}
          placeholder={placeholder}
          {...register}
        ></textarea>
      ) : (
        <input
          type={type}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/30 focus:border-primary block w-full p-2.5"
          multiple={multiple}
          placeholder={placeholder}
          {...register}
        />
      )}
      {/* // placeholder="name@flowbite.com" */}
    </div>
  );
};

export default InputWithLabel;
