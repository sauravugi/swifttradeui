import axios from "axios";
import type {
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";

const API_BASE_URL = "http://localhost:8080/api";

export const login = async (
  request: LoginRequest
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    `${API_BASE_URL}/auth/login`,
    request
  );

  return response.data;
};