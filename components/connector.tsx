import { useAccount, useConnect } from 'wagmi'

const getReadyStatus = (readyStatus: any): string => {
  if (readyStatus === undefined) {
    return 'unclear'
  } else if (readyStatus === true) {
    return 'yes'
  } else if (readyStatus === false) {
    return 'no'
  } else {
    return 'wut'
  }
}

const Connector = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })

  if (accountData) {
    return (
      <div>
        <div>Connected to {accountData && accountData.connector && accountData.connector.name}</div>
        <div>
            As {accountData.address}
        </div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    )
  } else {
    return (
      <div>
      <p>
        Connect your wallet with one of the options below:
        <br/>
      </p>
      {connectData.connectors.map((x) => (
        <button key={x.id} onClick={() => connect(x)}>
          {x.name} (ready? {getReadyStatus(x.ready)})
        </button>
      ))}

      {connectError && <div>{connectError?.message ?? 'Failed to connect'}</div>}
    </div>
    )
  }
}

export default Connector
