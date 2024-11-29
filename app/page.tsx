import { ModeToggle } from '@/components/mode-toggle';
import { HomeContent } from '@/modules/home/components';

export default function Home() {
    return (
        <div className="grid h-screen place-content-center bg-gray-100 text-2xl dark:bg-gray-700">
            <HomeContent />
            <ModeToggle />
        </div>
    );
}
