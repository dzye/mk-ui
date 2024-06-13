import { type Meta, type StoryObj, type ArgTypes, setup } from '@storybook/vue3'
import { fn, within, userEvent, expect } from '@storybook/test'
import { MkButton } from 'mk-ui'

type Story = StoryObj<typeof MkButton> & {
  argTypes: ArgTypes
}

const meta: Meta<typeof MkButton> = {
  title: "Example/Button",
  component: MkButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
${val}
</div>
`
export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  render: (args) => ({
    components: { MkButton },
    setup() {
      return { args };
    },
    template: container(
      `<mk-button v-bind="args">{{args.content}}</mk-button>`
    ),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click btn", async () => {
      await userEvent.click(canvas.getByRole('button'))
    })
    expect(args.onClick).toHaveBeenCalled()
  }
};

export default meta
