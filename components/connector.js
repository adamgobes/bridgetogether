import { useAccount, useConnect } from 'wagmi'

const Connector = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })

  if (accountData) {
    return (
      <div>
        <div>Connected to {accountData.connector.name}</div>
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
        <button disabled={!x.ready} key={x.id} onClick={() => connect(x)}>
          {x.name}
          {!x.ready && ' (unsupported)'}
        </button>
      ))}

      {connectError && <div>{connectError?.message ?? 'Failed to connect'}</div>}
    </div>
    )
  }
}

export default Connector
