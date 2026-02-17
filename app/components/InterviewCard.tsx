import { getRandomInterviewCover } from "@/public/utils";
import dayjs from "dayjs";
import Image from "next/image";

const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt}: InterviewCardProps) => {
  const feedback = null as Feedback | null;

  // 正则表达式，g 表示全局匹配，i 表示不区分大小写，检查字符串中是否包含 "mix"
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>

          <Image src={getRandomInterviewCover()} alt="Interview Cover" width={90} height={90} className="rounded-full object-fit size-[90px]" />
        </div>
      </div>
    </div>
  );
}

export default InterviewCard