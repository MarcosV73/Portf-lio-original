import { useCallback, useMemo, useState } from 'react'
import {
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import {
  LuBot,
  LuBrainCircuit,
  LuCode,
  LuGitBranch,
  LuMessagesSquare,
  LuPlug,
  LuTable2,
  LuWebhook,
} from 'react-icons/lu'
import { SiChatwoot, SiMongodb, SiWhatsapp } from 'react-icons/si'
import {
  chatbotWorkflowEdges,
  chatbotWorkflowNodes,
} from '../data/chatbotWorkflow.js'

const categoryMeta = {
  webhook: { label: 'Webhook', Icon: LuWebhook },
  code: { label: 'Code', Icon: LuCode },
  decision: { label: 'IF', Icon: LuGitBranch },
  integration: { label: 'HTTP Request', Icon: LuPlug },
  data: { label: 'Data Table', Icon: LuTable2 },
  ai: { label: 'Agente IA', Icon: LuBrainCircuit },
  model: { label: 'Modelo IA', Icon: LuBot },
  memory: { label: 'MongoDB', Icon: SiMongodb },
  response: { label: 'Resposta', Icon: LuMessagesSquare },
  human: { label: 'Chatwoot', Icon: SiChatwoot },
  message: { label: 'WhatsApp', Icon: SiWhatsapp },
}

const initialWorkflowNode =
  chatbotWorkflowNodes.find((node) => node.id === 'node-05') || chatbotWorkflowNodes[0]
const initialViewport = { x: 1110, y: 82, zoom: 0.95 }

function WorkflowNode({ data, selected }) {
  const meta = categoryMeta[data.category] || categoryMeta.code
  const Icon = meta.Icon

  return (
    <div
      className={`workflow-node workflow-node--${data.category} ${
        selected ? 'is-selected' : ''
      }`}
    >
      <Handle className="workflow-handle" type="target" position={Position.Left} />
      <span className="workflow-node__icon" aria-hidden="true">
        <Icon focusable="false" />
      </span>
      <span className="workflow-node__content">
        <span className="workflow-node__category">{meta.label}</span>
        <strong>{data.label}</strong>
      </span>
      <Handle className="workflow-handle" type="source" position={Position.Right} />
    </div>
  )
}

function WorkflowInner({ workflow }) {
  const [activeNode, setActiveNode] = useState(initialWorkflowNode)
  const [hoveredNodeId, setHoveredNodeId] = useState(null)
  const { fitView, setViewport } = useReactFlow()

  const nodeTypes = useMemo(() => ({ workflowNode: WorkflowNode }), [])
  const edges = useMemo(
    () =>
      chatbotWorkflowEdges.map((item) => {
        const isConnected =
          hoveredNodeId && (item.source === hoveredNodeId || item.target === hoveredNodeId)

        return {
          ...item,
          type: 'smoothstep',
          className: `workflow-edge workflow-edge--${item.kind} ${
            item.branch ? 'workflow-edge--branch' : ''
          } ${isConnected ? 'workflow-edge--is-connected' : ''}`,
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        }
      }),
    [hoveredNodeId],
  )

  const handleStartView = useCallback(() => {
    setViewport(initialViewport, { duration: 500 })
  }, [setViewport])

  const handleFullView = useCallback(() => {
    fitView({ duration: 650, padding: 0.18 })
  }, [fitView])

  const handleNodeClick = useCallback((_, node) => {
    setActiveNode(node)
  }, [])

  return (
    <div className="workflow-block" id="workflow" aria-label={workflow.title}>
      <div className="workflow-heading">
        <div>
          <p className="project-number">Workflow interativo do n8n</p>
          <h4>{workflow.title}</h4>
        </div>
        <div className="workflow-actions">
          <button className="workflow-fit" type="button" onClick={handleStartView}>
            Voltar ao início
          </button>
          <button
            className="workflow-fit workflow-fit--ghost"
            type="button"
            onClick={handleFullView}
          >
            Ver fluxo completo
          </button>
        </div>
      </div>

      <p className="workflow-hint">{workflow.hint}</p>

      <div className="workflow-stage">
        <div className="workflow-shell">
          <ReactFlow
            nodes={chatbotWorkflowNodes}
            edges={edges}
            nodeTypes={nodeTypes}
            defaultViewport={initialViewport}
            nodesDraggable={false}
            panOnScroll
            minZoom={0.08}
            maxZoom={1.45}
            onNodeClick={handleNodeClick}
            onNodeMouseEnter={(_, node) => setHoveredNodeId(node.id)}
            onNodeMouseLeave={() => setHoveredNodeId(null)}
          >
            <Controls showInteractive={false} position="bottom-left" />
          </ReactFlow>
        </div>
        <aside className="workflow-inspector" aria-live="polite">
          <span>{categoryMeta[activeNode.data.category]?.label || 'Node'}</span>
          <strong>{activeNode.data.label}</strong>
          <p>{activeNode.data.description}</p>
        </aside>
      </div>
    </div>
  )
}

function N8nWorkflow({ workflow }) {
  return (
    <ReactFlowProvider>
      <WorkflowInner workflow={workflow} />
    </ReactFlowProvider>
  )
}

export default N8nWorkflow
