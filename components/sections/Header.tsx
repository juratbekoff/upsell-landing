import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.svg"

import {getLocale, localeType} from "@/locales/config";
import Button from "@/components/ui/button";
import Modal from "@/components/modal";

const Header = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "Header")

    return (
        <header
            className="flex justify-between z-50 border border-neutral-800 bg-neutral-900 p-2 rounded-lg fixed container max-lg:w-90"
        >
            <Link href="/" className="flex gap-2 items-center">
                <Image
                    src={logo}
                    alt="Llama Upsell Logo"
                    className="m-[10px]"
                    width={28}
                    height={28}
                    fetchPriority="high"
                />
                <span className="text-xs font-semibold max-[300px]:hidden">{t.logo.title}</span>
            </Link>

            <nav className="flex gap-8 items-center max-md:hidden">
                <ul className="flex font-medium gap-8 max-lg:gap-4 text-[16px] leading-sm">
                    <Link href={t.nav_item_1.href} className="cursor-pointer">
                        {t.nav_item_1.label}
                    </Link>

                    <Link href={t.nav_item_2.href} target={"_blank"} className="cursor-pointer">
                        {t.nav_item_2.label}
                    </Link>

                    <Link href={`/#pricing`} className="cursor-pointer">
                        {t.nav_item_3.label}
                    </Link>
                </ul>

                <a href="https://apps.shopify.com/upsell-prod" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary-small">
                        {t.button.label}
                    </Button>
                </a>
            </nav>

            <Modal/>
        </header>
    );
};

export default Header;
