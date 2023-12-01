export default interface ITemplateEngine {
  render: (template: string, params: Record<string, any>) => string
}
