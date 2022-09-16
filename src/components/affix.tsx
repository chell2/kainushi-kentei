import { ArrowUpIcon } from '@heroicons/react/24/solid'
import { Affix, Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

const PageTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      {/* Affix is located at the bottom of the screen, scroll to see it */}
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              color="cyan.5"
              leftIcon={<ArrowUpIcon className="h-6 w-6 text-white"/>}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default PageTop;