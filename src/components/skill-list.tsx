import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Skill } from '../services'

function SkillButton({ label, iconStyle, iconName, level, type, power, description, start, lastUsed }) {

  // settings for modal
  const { isOpen, onOpen, onClose } = useDisclosure()

  let typeIcon: any = 'burn'
  if (type == 'code') { typeIcon = 'code' }
  if (type == 'language') { typeIcon = 'globe' }

  return (
    <>
      <a onClick={onOpen} className={(`cursor-pointer text-white border border-white p-2 flex justify-center align-middle items-center shadow-lg mx-1 mb-2 md:mx-4 md:mb-4 no-underline ${"bg-level-" + level}`)}>
        <FontAwesomeIcon className="w-12 h-12 md:w-16 md:h-16" icon={[iconStyle, iconName]} />
      </a>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={(`py-2 px-3 text-xl bg-black text-white ${"bg-level-" + level}`)}>
              <div className="font-bold">{label ? label : 'INFO'}</div>
              <div className="uppercase">{level ? `LEVEL${level}` : ''} {type ? type : ``}</div>
            </div>
            <div className="py-1 px-3">
              <div className="flex items-center">
                {type && <div className="w-8 mr-2">
                  <FontAwesomeIcon icon={['fas', typeIcon]} />
                </div>}
                <div className="text-5xl font-bold">{power}</div>
              </div>

              <div>{description}</div>
            </div>
            {(start || lastUsed) && (<>
              <div className=" border-t border-gray-600 pt-1 pb-3 px-3">

                {start && (<>
                  <>USING SINCE</>
                  <div>{start}</div>
                </>)}
                {lastUsed && (<>
                  <div>LAST USED</div>
                  <div>{lastUsed}</div>
                </>)}
              </div>
            </>
            )}


          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

type SkillMenuProps = {
  left?: boolean,
  buttons: Skill[]
}

export function SkillMenu({ left = false, buttons }: SkillMenuProps) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {buttons.map((button) => (
        <SkillButton
          key={button.label}
          type={button.type}
          iconStyle={button.iconStyle}
          iconName={button.iconName}
          label={button.label}
          level={button.level}
          power={button.power}
          description={button.description}
          start={button.start}
          lastUsed={button.lastUsed}
        />
      ))}
    </div>
  )
};
