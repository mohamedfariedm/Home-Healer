import Image from "next/image";
import cn from "@core/utils/class-names";
import NewsLetterForm from "./newsletter-form";
import newsletterImg from "@public/newsletter-7.jpg";
import { useTranslations } from "next-intl";

export default function NewsLetter({ className }: { className?: string }) {
  const t = useTranslations("common");
  return (
    <div
      className={cn(
        className,
        "grid grid-cols-7 overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-gray-50"
      )}
    >
      <div className="relative col-span-3 hidden aspect-[36/45] @[700px]:inline-block">
        <Image
          src={newsletterImg}
          alt="newsletter"
          fill
          priority
          sizes="(max-width: 768px) 140px"
        />
      </div>
      <div className="col-span-full flex flex-col items-start justify-center rounded-xl p-6 @[700px]:col-span-4 @[700px]:!items-center @[700px]:pl-8">
        <div className="w-full @[700px]:max-w-[440px]">
          <div className="mb-8 text-center">
            <h2 className="mx-auto mb-3 text-xl @2xl:text-2xl @7xl:text-3xl @7xl:leading-10 @[700px]:mb-4">
              {t("text-subscribe-newsletter")}!
            </h2>
            <p className="mx-auto max-w-[26ch] text-sm leading-6 text-gray-500 @2xl:text-base dark:text-gray-600">
              {t("text-subscribe-newsletter-details-two")}
            </p>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
