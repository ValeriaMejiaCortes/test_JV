export default interface PostInterface {
  id: string;
  title: string;
  text: string;
}

export interface ModalInterface {
  showModal: boolean;
  post: PostInterface | undefined;
  setShowModal: (showModal: boolean) => void
}

export interface CreatePostModalInterface {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void
  postUrl: string;
  refreshPosts: () => void
}

