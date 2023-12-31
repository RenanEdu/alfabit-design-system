import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal, { type ModalProps } from "./Modal";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import { ModalStoryChoice } from "./ModalStoryChoice";


/* eslint-disable-next-line storybook/default-exports */
const ModalStoryInfo = (args: ModalProps) => {
    const [isopen, setIsOpen] = useState(args.isOpen);
    return (
     <>
       <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button> 
        <Modal {...args} isOpen={isopen} onClose={() => setIsOpen(false)}>
            <Typography>
                Today, every company I talk to wants to implement a design system from
                scratch. Unfortunately, the details of a design system are not
                explored, so often they are not used to the maximum to create a useful
                user experience.
            </Typography>
            <Typography>
                New designers can take a look at any of the design patterns listed
                below to learn best practices and make informed design decisions on
                their projects.
            </Typography>
            <div className="flex flex-col gap-3">
                <Button onClick={() => setIsOpen(false)}>Primary Button</Button>
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                    Secondary Button
                </Button>
            </div>
          </Modal>
        </>
    );
};       

  export const ModalChoice: Story = {
    args: {
      isOpen: false,
      title: "Do you want to save your changes?",
    },
    render: (args: ModalProps) => {
      return <ModalStoryChoice {...args} />;
    },
  };

const meta: Meta<typeof Modal> = {
    title: 'Design System/Molecules/Modal',
    component: Modal,
    decorators: [
        (Story) => (
            <div style={{margin: "3em" }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalInfo: Story = {
    args: {
        isOpen: false,
        title: "Modal Info",
    },
    render: (args: ModalProps) => {
        return <ModalStoryInfo {...args} />;
    },
};


  
  