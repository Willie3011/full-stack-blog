import { FaBookmark, FaRegTrashCan } from "react-icons/fa6";

const PostMenuActions = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <FaBookmark className="text-base"/>
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <FaRegTrashCan className="text-red-500 text-base" />
        <span>Save this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
