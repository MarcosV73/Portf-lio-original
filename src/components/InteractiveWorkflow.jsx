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
import {
  SiChatwoot,
  SiGmail,
  SiGooglesheets,
  SiMake,
  SiMongodb,
  SiTelegram,
  SiWhatsapp,
} from 'react-icons/si'

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
  gmail: { label: 'Gmail', Icon: SiGmail },
  make: { label: 'Make', Icon: SiMake },
  parser: { label: 'Text parser', Icon: LuCode },
  sheets: { label: 'Google Sheets', Icon: SiGooglesheets },
  telegram: { label: 'Telegram Bot', Icon: SiTelegram },
  tools: { label: 'Tools', Icon: LuCode },
  filter: { label: 'Filtro', Icon: LuGitBranch },
}

const fallbackViewport = { x: 0, y: 0, zoom: 0.85 }

function normalizeNode(node, variant) {
  if (node.data) {
    return {
      ...node,
      type: 'workflowNode',
      data: {
        ...node.data,
        variant,
      },
    }
  }

  return {
    id: node.id,
    type: 'workflowNode',
    position: node.position,
    data: {
      label: node.label,
      moduleType: node.type,
      category: node.category,
      description: node.description,
      icon: node.icon,
      variant,
    },
  }
}

function normalizeEdge(edge) {
  return {
    id: edge.id,
    source: edge.source,
    target: edge.target,
    branch: edge.branch,
    kind: edge.kind || edge.category || edge.type || 'main',
  }
}

function WorkflowNode({ data, selected }) {
  const meta = categoryMeta[data.category] || categoryMeta.code
  const Icon = categoryMeta[data.icon]?.Icon || meta.Icon

  return (
    <div
      className={`workflow-node workflow-node--${data.category} workflow-node--variant-${data.variant} ${
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
  const variant = workflow.variant || 'n8n'
  const nodes = useMemo(
    () => workflow.nodes.map((node) => normalizeNode(node, variant)),
    [variant, workflow.nodes],
  )
  const normalizedEdges = useMemo(
    () => workflow.edges.map(normalizeEdge),
    [workflow.edges],
  )
  const initialNode =
    nodes.find((node) => node.id === workflow.initialNodeId) || nodes[0]
  const [activeNode, setActiveNode] = useState(initialNode)
  const [hoveredNodeId, setHoveredNodeId] = useState(null)
  const { fitView, setViewport } = useReactFlow()

  const nodeTypes = useMemo(() => ({ workflowNode: WorkflowNode }), [])
  const edges = useMemo(
    () =>
      normalizedEdges.map((item) => {
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
    [hoveredNodeId, normalizedEdges],
  )

  const initialViewport = workflow.initialViewport || fallbackViewport

  const handleStartView = useCallback(() => {
    setViewport(initialViewport, { duration: 500 })
  }, [initialViewport, setViewport])

  const handleFullView = useCallback(() => {
    fitView({ duration: 650, padding: workflow.fitPadding ?? 0.18 })
  }, [fitView, workflow.fitPadding])

  const handleNodeClick = useCallback((_, node) => {
    setActiveNode(node)
  }, [])

  return (
    <div
      className={`workflow-block workflow-block--${variant}`}
      id={workflow.anchorId || undefined}
      aria-label={workflow.title}
    >
      <div className="workflow-heading">
        <div>
          <p className="project-number">{workflow.kicker}</p>
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
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            defaultViewport={initialViewport}
            nodesDraggable={false}
            panOnScroll
            zoomOnPinch
            minZoom={workflow.minZoom || 0.08}
            maxZoom={workflow.maxZoom || 1.45}
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

function InteractiveWorkflow({ workflow }) {
  return (
    <ReactFlowProvider>
      <WorkflowInner workflow={workflow} />
    </ReactFlowProvider>
  )
}

export default InteractiveWorkflow
