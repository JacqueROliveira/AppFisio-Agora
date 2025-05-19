import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

type Props = PressableProps & {
  data: {
    nome: string
    senha: string
  }
  onDelete: () => void
  onOpen: () => void
}

export function Patient({ data, onDelete, onOpen, ...rest }: Props) {
  return (
    <Pressable
      style={{
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row",
      }}
      {...rest}
    >
      <Text style={{ flex: 1 }}>
        {data.senha} - {data.nome}
      </Text>

      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons nome="delete" size={24} color="red" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onOpen}>
        <MaterialIcons nome="visibility" size={24} color="blue" />
      </TouchableOpacity>
    </Pressable>
  )
}
